
export interface IButtonProps {
    submit?: boolean
    modificators: string | string[]
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

export interface IMainContainerProps {
    children : JSX.Element | JSX.Element[] 
}

export interface IProfileStatusMenuProps {
    name: string
    imgUrl?: string
}