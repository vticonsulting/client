import Vue from 'vue';
import VTooltip from 'v-tooltip';

Vue.use(VTooltip, {
    popover: {
        defaultPlacement: 'bottom',
        // Use the `popoverClass` prop for theming
        defaultClass: 'vue-popover-theme',
        // Base class (change if conflicts with other libraries)
        defaultBaseClass: 'tooltip popover',
        // Wrapper class (contains arrow and inner)
        defaultWrapperClass: 'wrapper',
        // Inner content class
        defaultInnerClass: 'tooltip-inner popover-inner',
        // Arrow class
        defaultArrowClass: 'tooltip-arrow popover-arrow',
        // Class added when popover is open
        defaultOpenClass: 'open',
        defaultDelay: 0,
        defaultTrigger: 'click',
        defaultOffset: 0,
        defaultContainer: 'body',
        defaultBoundariesElement: undefined,
        defaultPopperOptions: {},
        // Hides if clicked outside of popover
        defaultAutoHide: true,
        // Update popper on content resize
        defaultHandleResize: true
    }
});
