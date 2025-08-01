export interface CardProps{
    title: string;
    content: string;
}
export interface PostModalProps{
    onClose: ()=>void
    onSubmit: (data: CardProps) => void
}
export interface ButtonProps{
    size: string;
    shape: string;
}
export interface PostProps{
    title: string;
    content: string;
    userId: number;
}
export interface UserProps{
    name: string;
    email:string;
    address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
}