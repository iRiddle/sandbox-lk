
export interface IButtonProps {
    submit?: boolean
    variant: string | string[]
    children?: string
    onClick?: ()=> void
}

export interface IWidthCoontainerProps {
    children: JSX.Element | JSX.Element[]
}

export interface ITabs {
    label: string,
    route: string
}

export type TabsArrayType = ITabs[]

