/**
 * Recent work photos supplied by the client. Location is stated at the region level
 * ("southeastern NC", the company's service area) because the specific town for each job
 * is unknown. Never assign a town to a photo unless the client confirms the job was there;
 * when they do, replace REGION in that entry with the town (e.g. 'Hampstead, NC').
 */
const REGION = 'southeastern NC';
import pierGazeboSeawall from '../assets/photos/covered-pier-gazebo-vinyl-seawall.webp';
import pierGazeboMarsh from '../assets/photos/pier-gazebo-marsh-view.webp';
import coveredPierComposite from '../assets/photos/covered-pier-composite-decking-canal-view.webp';
import dockCabinet from '../assets/photos/custom-dock-cabinet-rod-holders.webp';
import longPierLifts from '../assets/photos/long-pier-covered-platform-two-boat-lifts.webp';
import gangwayFloatingDock from '../assets/photos/fixed-pier-gangway-floating-dock.webp';
import walkwayConstruction from '../assets/photos/pier-walkway-decking-construction.webp';
import twinLifts from '../assets/photos/twin-boat-lifts-composite-dock-grated-walkway.webp';
import liftsSideView from '../assets/photos/boat-lifts-side-view-composite-dock.webp';
import pierBench from '../assets/photos/pier-bench-railing-inlet-view.webp';

export const gallery = [
  { src: pierGazeboSeawall, caption: `Covered pier, stairs and dock in front of a vinyl seawall, ${REGION}`, alt: `Covered pier with a hip roof and stairs down to a lower dock, built in front of a white vinyl seawall in ${REGION}` },
  { src: pierGazeboMarsh, caption: `Covered platform with built-in benches over the marsh, ${REGION}`, alt: `Covered pier platform with a hip roof, built-in benches and composite decking overlooking a coastal marsh in ${REGION}` },
  { src: coveredPierComposite, caption: `Covered pier with composite decking and a bar-height rail, ${REGION}`, alt: `Shaded pier deck with gray composite decking, a wide bar-height rail and a view down a residential canal in ${REGION}` },
  { src: dockCabinet, caption: `Custom dock storage cabinet with rod holders, ${REGION}`, alt: `Custom pressure treated storage cabinet with built-in fishing rod holders on a dock overlooking marsh in ${REGION}` },
  { src: longPierLifts, caption: `Long pier to a covered platform with two boat lifts, ${REGION}`, alt: `Long wooden pier crossing marsh grass to a covered platform with a metal roof and two boats on lifts in ${REGION}` },
  { src: gangwayFloatingDock, caption: `Fixed pier with a gangway down to a floating dock, ${REGION}`, alt: `New fixed pier and stairs with an aluminum gangway leading down to a floating dock on calm green water in ${REGION}` },
  { src: walkwayConstruction, caption: `Decking a new pier walkway out to a covered platform, ${REGION}`, alt: `Crew decking a long new pier walkway across the marsh toward a covered platform, with a circular saw in the foreground in ${REGION}` },
  { src: twinLifts, caption: `Two boat lifts on either side of a composite dock with a grated walkway, ${REGION}`, alt: `Two center console boats raised on boat lifts on either side of a gray composite dock with a light-passing grated walkway down the middle in ${REGION}` },
  { src: liftsSideView, caption: `Boats on lifts beside a composite dock and bulkhead, ${REGION}`, alt: `Side view of two center console boats on boat lifts next to a composite dock with grated decking and a timber-capped bulkhead in ${REGION}` },
  { src: pierBench, caption: `Built-in bench and corner table on a pier railing, ${REGION}`, alt: `Pressure treated built-in bench with a corner table and cup holder on a pier railing overlooking an inlet in ${REGION}` },
];
