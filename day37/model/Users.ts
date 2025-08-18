enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
}

interface IUser {
    id: number;
    email: string;
    password: string;
    name?: string;
    age?: number;
    profileImage?: string;
    isChecked?: boolean;
    role?: UserRole;
    createdAt: Date;
    updatedAt: Date;
}

interface IPagination {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    currentPage: number;
}
interface IPaginationWithNextAndPrevious extends IPagination {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    nextPage: number;
    previousPage: number;
}

interface IAdmin extends IUser {
    role: UserRole.ADMIN;
}

interface IUserList {
    users: IUser[];
    pagination: IPaginationWithNextAndPrevious;
}

const userList: IUserList = {
    users: [
        {
            id: 1,
            email: 'admin@example.com',
            password: 'hashedPassword123',
            name: '김관리자',
            age: 35,
            profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
            isChecked: false,
            role: UserRole.ADMIN,
            createdAt: new Date('2024-01-15T09:00:00Z'),
            updatedAt: new Date('2024-03-20T14:30:00Z'),
        },
        {
            id: 2,
            email: 'john.doe@example.com',
            password: 'hashedPassword456',
            name: 'John Doe',
            age: 28,
            profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
            isChecked: true,
            role: UserRole.USER,
            createdAt: new Date('2024-02-01T10:15:00Z'),
            updatedAt: new Date('2024-03-18T16:45:00Z'),
        },
        {
            id: 3,
            email: 'jane.smith@example.com',
            password: 'hashedPassword789',
            name: 'Jane Smith',
            age: 32,
            profileImage: 'https://images.unsplash.com/photo-1494790108755-2616c04e6e06?w=150&h=150&fit=crop&crop=face',
            isChecked: false,
            role: UserRole.USER,
            createdAt: new Date('2024-02-10T08:30:00Z'),
            updatedAt: new Date('2024-03-15T11:20:00Z'),
        },
        {
            id: 4,
            email: 'mike.johnson@example.com',
            password: 'hashedPassword101',
            name: 'Mike Johnson',
            age: 26,
            profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
            isChecked: true,
            role: UserRole.USER,
            createdAt: new Date('2024-02-15T13:45:00Z'),
            updatedAt: new Date('2024-03-10T09:15:00Z'),
        },
        {
            id: 5,
            email: 'sarah.wilson@example.com',
            password: 'hashedPassword202',
            name: 'Sarah Wilson',
            age: 29,
            profileImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
            isChecked: false,
            role: UserRole.USER,
            createdAt: new Date('2024-02-20T15:00:00Z'),
            updatedAt: new Date('2024-03-08T12:30:00Z'),
        },
        {
            id: 6,
            email: 'david.brown@example.com',
            password: 'hashedPassword303',
            name: 'David Brown',
            age: 31,
            isChecked: false,
            role: UserRole.USER,
            createdAt: new Date('2024-02-25T11:20:00Z'),
            updatedAt: new Date('2024-03-05T14:45:00Z'),
        },
        {
            id: 7,
            email: 'lisa.davis@example.com',
            password: 'hashedPassword404',
            name: 'Lisa Davis',
            age: 27,
            profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
            isChecked: true,
            role: UserRole.USER,
            createdAt: new Date('2024-03-01T09:30:00Z'),
            updatedAt: new Date('2024-03-02T16:00:00Z'),
        },
        {
            id: 8,
            email: 'robert.miller@example.com',
            password: 'hashedPassword505',
            name: 'Robert Miller',
            age: 34,
            profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
            isChecked: false,
            role: UserRole.USER,
            createdAt: new Date('2024-03-05T14:15:00Z'),
            updatedAt: new Date('2024-03-20T10:30:00Z'),
        }
    ],
    pagination: {
        total: 25,
        page: 1,
        limit: 10,
        totalPages: 3,
        currentPage: 1,
        hasNextPage: true,
        hasPreviousPage: false,
        nextPage: 2,
        previousPage: 0,
    },
}


