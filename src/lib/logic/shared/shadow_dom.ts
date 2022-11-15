import type { SvelthreeShadowDOMElement } from "../../types/types-extra"
import type { PropButton, PropLink } from "../../types/types-comp-props"

const recreate_shadow_dom_el = (
	shadow_dom_el: SvelthreeShadowDOMElement | undefined | null,
	our_parent_shadow_dom_el: SvelthreeShadowDOMElement | undefined,
	button: PropButton | undefined | null,
	link: PropLink | undefined | null,
	c_name: string
): SvelthreeShadowDOMElement | null => {
	if (shadow_dom_el) remove_shadow_dom_el(shadow_dom_el)
	return create_shadow_dom_el(our_parent_shadow_dom_el, button, link, c_name)
}

const remove_shadow_dom_el = (shadow_dom_el: SvelthreeShadowDOMElement): void => {
	if (shadow_dom_el.parentNode) shadow_dom_el.parentNode.removeChild(shadow_dom_el)
}

const create_shadow_dom_el = (
	our_parent_shadow_dom_el: SvelthreeShadowDOMElement | undefined,
	button: PropButton | undefined | null,
	link: PropLink | undefined | null,
	c_name: string
): SvelthreeShadowDOMElement | null => {
	let shadow_dom_el: SvelthreeShadowDOMElement

	if (button) {
		shadow_dom_el = document.createElement("button")
		// TODO  is this ok like this?
		Object.assign(shadow_dom_el, button)
	} else if (link) {
		shadow_dom_el = document.createElement("a")
		// TODO  is this ok like this?
		Object.assign(shadow_dom_el, link)
	} else {
		shadow_dom_el = document.createElement("div")
	}

	shadow_dom_el.dataset.kind = `${c_name}`

	// IMPORTANT  Scenes are appended reactively when `shadow_root_el` is available!
	if (c_name !== "Scene") {
		if (our_parent_shadow_dom_el) {
			our_parent_shadow_dom_el.appendChild(shadow_dom_el)
			return shadow_dom_el
		} else {
			console.error(
				`SVELTHREE > ${c_name} > create_shadow_dom_el > couldn't append shadow dom, no 'our_parent_shadow_dom_el'!`,
				our_parent_shadow_dom_el
			)
			return null
		}
	} else {
		return shadow_dom_el
	}
}

export { recreate_shadow_dom_el, create_shadow_dom_el }
