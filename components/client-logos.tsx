"use client"

import { Logos3 } from "@/components/ui/logos3"
// Import logos directly from the app/clients folder (these files already exist in the workspace)
import BION from "../app/clients/BION.png"
import Blusmart from "../app/clients/blusmart.png"
import Bosch from "../app/clients/Bosch.png"
import CloudExtel from "../app/clients/cloudextel.png"
import ExponentPower from "../app/clients/exponentpower.png"
import Hillrock from "../app/clients/hillrockNPS.png"
import Ibis from "../app/clients/ibis.png"
import ParkPlus from "../app/clients/park+.png"
import RVUni from "../app/clients/RVUni.png"
import Statiq from "../app/clients/statiq.png"
import SunMobility from "../app/clients/sunmobility.png"
import Velociti from "../app/clients/velociti.png"

const clients = [
  { id: "logo-1", description: "Bion", image: BION.src || BION, className: "h-16 w-auto" },
  { id: "logo-2", description: "Ibis Hotels", image: Ibis.src || Ibis, className: "h-16 w-auto" },
  { id: "logo-3", description: "Blusmart", image: Blusmart.src || Blusmart, className: "h-16 w-auto" },
  { id: "logo-4", description: "CloudExtel", image: CloudExtel.src || CloudExtel, className: "h-16 w-auto" },
  { id: "logo-5", description: "Exponent Power", image: ExponentPower.src || ExponentPower, className: "h-16 w-auto" },
  { id: "logo-6", description: "HillRock", image: Hillrock.src || Hillrock, className: "h-16 w-auto" },
  { id: "logo-7", description: "Park+", image: ParkPlus.src || ParkPlus, className: "h-10 w-auto" },
  { id: "logo-8", description: "RV University", image: RVUni.src || RVUni, className: "h-16 w-auto" },
  { id: "logo-9", description: "Statiq", image: Statiq.src || Statiq, className: "h-16 w-auto" },
  { id: "logo-10", description: "Sun Mobility", image: SunMobility.src || SunMobility, className: "h-16 w-auto" },
  { id: "logo-11", description: "Bosch", image: Bosch.src || Bosch, className: "h-16 w-auto" },
  { id: "logo-12", description: "Velociti", image: Velociti.src || Velociti, className: "h-16 w-auto" },
]

export default function ClientLogos() {
  return (
    <Logos3
      heading="Our Trusted Clients"
      logos={clients}
    />
  )
}
