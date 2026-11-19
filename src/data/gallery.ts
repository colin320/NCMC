/**
 * Recent work photos supplied by the client.
 * Town per photo provided by Dyno on 2026-11-19 (pending client verification, see
 * docs/LAUNCH-CHECKLIST.md). Only change a town when the client confirms the job location.
 */
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
  { src: pierGazeboSeawall, town: 'Hampstead', caption: 'Covered pier, stairs and dock in front of a vinyl seawall', alt: `Covered pier with a hip roof and stairs down to a lower dock, built in front of a white vinyl seawall in Hampstead, NC` },
  { src: pierGazeboMarsh, town: 'Topsail Beach', caption: 'Covered platform with built-in benches over the marsh', alt: `Covered pier platform with a hip roof, built-in benches and composite decking overlooking a coastal marsh in Topsail Beach, NC` },
  { src: coveredPierComposite, town: 'Hampstead', caption: 'Covered pier with composite decking and a bar-height rail', alt: `Shaded pier deck with gray composite decking, a wide bar-height rail and a view down a residential canal in Hampstead, NC` },
  { src: dockCabinet, town: 'Hampstead', caption: 'Custom dock storage cabinet with rod holders', alt: `Custom pressure treated storage cabinet with built-in fishing rod holders on a dock overlooking marsh in Hampstead, NC` },
  { src: longPierLifts, town: 'Surf City', caption: 'Long pier to a covered platform with two boat lifts', alt: `Long wooden pier crossing marsh grass to a covered platform with a metal roof and two boats on lifts in Surf City, NC` },
  { src: gangwayFloatingDock, town: 'Topsail Beach', caption: 'Fixed pier with a gangway down to a floating dock', alt: `New fixed pier and stairs with an aluminum gangway leading down to a floating dock on calm green water in Topsail Beach, NC` },
  { src: walkwayConstruction, town: 'Topsail Beach', caption: 'Decking a new pier walkway out to a covered platform', alt: `Crew decking a long new pier walkway across the marsh toward a covered platform, with a circular saw in the foreground in Topsail Beach, NC` },
  { src: twinLifts, town: 'Surf City', caption: 'Two boat lifts on either side of a composite dock with a grated walkway', alt: `Two center console boats raised on boat lifts on either side of a gray composite dock with a light-passing grated walkway down the middle in Surf City, NC` },
  { src: liftsSideView, town: 'Surf City', caption: 'Boats on lifts beside a composite dock and bulkhead', alt: `Side view of two center console boats on boat lifts next to a composite dock with grated decking and a timber-capped bulkhead in Surf City, NC` },
  { src: pierBench, town: 'Surf City', caption: 'Built-in bench and corner table on a pier railing', alt: `Pressure treated built-in bench with a corner table and cup holder on a pier railing overlooking an inlet in Surf City, NC` },
];
