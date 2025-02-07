import { NextResponse } from 'next/server';
import { getUsers, getUserById, createUser, updateUser, deleteUser, initDB } from '@/lib/skijasi';

// Initialize the database when the server starts
initDB().catch((error: any) => {
  console.error('Failed to initialize database:', error);
});

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (id) {
    // Fetch a single user by ID
    const user = await getUserById(Number(id));
    if (user.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user[0]);
  } else {
    // Fetch all users
    const users = await getUsers();
    return NextResponse.json(users);
  }
}

export async function POST(request: Request) {
  try {
    const { first_name, last_name, age, does_ski } = await request.json();

    if (!first_name || !last_name || !age || typeof does_ski !== 'boolean') {
      return NextResponse.json({ error: 'Missing or invalid data' }, { status: 400 });
    }

    await createUser(first_name, last_name, age, does_ski);
    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, first_name, last_name, age, does_ski } = await request.json();

    if (!id || !first_name || !last_name || !age || typeof does_ski !== 'boolean') {
      return NextResponse.json({ error: 'Missing or invalid data' }, { status: 400 });
    }

    await updateUser(id, first_name, last_name, age, does_ski);
    return NextResponse.json({ message: 'User updated successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing user ID' }, { status: 400 });
    }

    await deleteUser(Number(id));
    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
  }
}
