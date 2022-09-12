import type { Vector3 } from "three"
import { not_equal } from "svelte/internal"
import { Propeller } from "./utils"

export default class PropVector3X {
	// previous value reference
	prev: Vector3
	prevValues: { x: number; y: number; z: number }

	constructor(private key: string, private obj_type: string, private origin: string) {}

	public update(obj: any, value: Vector3): boolean {
		switch (this.prev) {
			case undefined:
				this.prev = value
				// hot!
				Propeller.update(obj, this.obj_type, this.key, value, this.origin, "Vector3")
				this.setPrevValues(value)
				return true

			case value:
				// same object, perform deep check
				for (const k in value) {
					if (not_equal(this.prevValues[k], value[k])) {
						Propeller.update(obj, this.obj_type, this.key, value, this.origin, "Vector3")
						this.setPrevValues(value)
						this.prev = value
						return true
					}
				}
				return false
			default:
				// not undefined but !== value --> hot!
				Propeller.update(obj, this.obj_type, this.key, value, this.origin, "Vector3")
				this.setPrevValues(value)
				this.prev = value
				return true
		}
	}

	setPrevValues(value: Vector3) {
		this.prevValues = { x: value.x, y: value.y, z: value.z }
	}
}
