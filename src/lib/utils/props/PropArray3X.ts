import { not_equal } from "svelte/internal"
import { Propeller } from "./utils"
import type { SvelthreePropsOwner } from "../../types/types-extra"

export default class PropArray3X {
	// previous value reference
	prev: [number, number, number] | undefined
	prevValues: [number, number, number] | undefined

	constructor(private key: string, private obj_type: string, private origin: string) {}

	public update(obj: SvelthreePropsOwner, value: [number, number, number]): boolean {
		//v1
		switch (this.prev) {
			case undefined:
				this.prev = value
				// hot!
				Propeller.update(
					obj,
					this.obj_type,
					this.key,
					value as [number, number, number],
					this.origin,
					"Array3Nums"
				)
				this.prevValues = [value[0], value[1], value[2]]
				return true

			case value:
				// same object, perform deep check
				if (this.prevValues) {
					for (let i = 0; i < 3; i++) {
						if (not_equal(this.prevValues[i], value[i])) {
							Propeller.update(
								obj,
								this.obj_type,
								this.key,
								value as [number, number, number],
								this.origin,
								"Array3Nums"
							)
							this.prevValues = [value[0], value[1], value[2]]
							this.prev = value
							return true
						}
					}
				}

				return false
			default:
				// not undefined but !== value --> hot!
				Propeller.update(
					obj,
					this.obj_type,
					this.key,
					value as [number, number, number],
					this.origin,
					"Array3Nums"
				)
				this.prevValues = [value[0], value[1], value[2]]
				this.prev = value
				return true
		}
	}
}
