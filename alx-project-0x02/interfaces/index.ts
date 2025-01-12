export interface NavItem {
    label: string;
    href: string;
}

export interface CardProps {
    title: string;
    content: string;
}

export interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export interface PostApiResponse {
    id: number;
    title: string;
    body: string;
    userId: number;
}

export interface Post {
    id: number;
    title: string;
    content: string;
    userId?: number;
}

export interface PostCardProps {
    title: string;
    content: string;
    userId: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        city: string;
        zipcode: string;
    };
}

export interface UserCardProps {
    user: User;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (post: Omit<Post, 'id'>) => void;
}