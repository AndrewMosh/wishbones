import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panels = gsap.utils.toArray<HTMLElement>(".panel");
panels.pop(); // Remove the last panel

panels.forEach((panel, i) => {
    // Get the element holding the content inside the panel
    const innerpanel = panel.querySelector<HTMLElement>(".panel-content");

    // Get the Height of the content inside the panel
    const panelHeight = innerpanel?.offsetHeight || 0;

    // Get the window height
    const windowHeight = window.innerHeight;

    const difference = panelHeight - windowHeight;

    // Ratio (between 0 and 1) representing the portion of the overall animation that's for the fake-scrolling. We know that the scale & fade should happen over the course of 1 windowHeight, so we can figure out the ratio based on how far we must fake-scroll
    const fakeScrollRatio = difference > 0 ? difference / (difference + windowHeight) : 0;

    // If we need to fake scroll (because the panel is taller than the window), add the appropriate amount of margin to the bottom so that the next element comes in at the proper time.
    if (fakeScrollRatio && innerpanel) {
        panel.style.marginBottom = `${panelHeight * fakeScrollRatio}px`;
    }

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: panel,
            start: "bottom bottom",
            end: () => (fakeScrollRatio ? `+=${innerpanel?.offsetHeight}` : "bottom top"),
            pinSpacing: false,
            pin: true,
            scrub: true,
        },
    });

    // Fake scroll. We use 1 because that's what the rest of the timeline consists of (0.9 scale + 0.1 fade)
    if (fakeScrollRatio && innerpanel) {
        tl.to(innerpanel, { y: -difference, duration: 1 / (1 - fakeScrollRatio) - 1, ease: "none" });
    }
    tl.fromTo(panel, { scale: 1, opacity: 1 }, { scale: 0.5, opacity: 0.5, duration: 0.9 }).to(panel, { opacity: 0, duration: 0.1 });
});
