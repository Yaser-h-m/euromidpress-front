import type { Contributor } from '~/types/Contributor'
export type Article = {
    id: number
    title: string
    slug: string
    volume_id: number
    abstract?: string
    type: 'journal' | 'book' | 'proceeding'
    published_at: Date
    copy_rights?: string
    keywords?: string[]
    doi?: string
    pdf_path?: string
    order?: number
    is_published: boolean
    is_open_access: boolean
    created_by?: number
    updated_by?: number
    deleted_by?: number
    created_at: Date
    updated_at: Date
    deleted_at?: Date
    contributors?: Contributor[]
}
