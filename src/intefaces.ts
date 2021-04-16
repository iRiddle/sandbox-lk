export interface ILogoProps {
    description?: string
}

export interface IButtonProps {
    submit?: boolean
    variant: "--text-underlined--header" | "--text-icons-right--header" | string
    children?: string
    onClick?: ()=> void
    iconRight?: string
}