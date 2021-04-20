
export interface IButtonProps {
    submit?: boolean
    modificators: string | string[]
    activeModificator?: string
    isActive?: boolean
    counter?: number
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
    children : JSX.Element | null | Array<JSX.Element | null>
}

export interface IProfileStatusMenuProps {
    name: string
    imgUrl?: string
}

export interface IMainLayoutProps {
    children?: JSX.Element | JSX.Element[]
}