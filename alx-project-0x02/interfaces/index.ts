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