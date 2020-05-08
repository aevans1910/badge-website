export const TOGGLE_BADGE = "TOGGLE_BADGE"

export function toggle_badge(id) {
    return {
        type: TOGGLE_BADGE,
        id: id
    }
}