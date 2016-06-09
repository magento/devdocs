---
layout: default
group: pattern
subgroup: Container
title: Magento Admin Pattern Library
menu_title: Slide-out, Modals, and Overlays
menu_order: 2
menu_node:
version: 2.1
github_link: pattern-library/containers/slideouts-modals-overlays/slideouts-modals-overlays.md

---
<h2> Slide-out Panels, Modal Windows, and Overlays</h2>

<h3> Contents </h3>

* <a href="#overview">Overview</a>
* <a href="#slideouts">Slide Out</a>
* <a href="#modals">Modals</a>
* <a href="#overlays">Overlays</a>
* <a href="#assets">Assets</a>



<h3 id="overview">Overview</h3>

Within the Magento application it is often necessary to focus the user’s attention on some particular bit of content or isolated action, process or sub-process. A “Slide-out Panel”, “Modal Window” or “Overlay” is an effective way to achieve this. These are triggered by a particular user action causing their current task to be interrupted. The user must then take some required action to be returned to their primary task and continue (in most cases). The active state of any of overlays should occupy the topmost level of the z-index.

For solutions not described in this article or for further information, please contact the Magento UX Design team.

**Use of Slide-out Panels (aka “Slideouts”)**

Slide-out panels should be used for tertiary actions or sub-processes related to the user’s primary path. These panels allow for greater content and/or more complex interactions thus behaving much like an additional webpage while maintaining a contextual connection to the primary task.

**Use of Modal Windows (aka “Modals”)**

Modal windows are best used to focus attention either on some particular content (such as a video), or to confirm an action or decision (such as “Do you wish to delete the selected files”). Typically modals should be used when the information presented is more concise and the interactions are less complex (than that used in slideouts).

**Use of Modal Overlay**

Overlays, for the purposes of this document, generally refer to any content that appears over the primary page when triggered. Overlays also refer more specifically to those containers used to present actions, navigation, filtering options, tooltips and contextual help, messages, etc.  See examples below.

<h3 id="slideouts">Slide-out</h3>
**Behavior and Animation**

When the slideout is triggered (by an action taken on the “parent page”), the panel will appear to slide into position in the viewport from right-to-left. The panel should be attached to the top of the browser and match the length of the parent page. In its final position, the panel should not fully obscure the parent page, leaving a portion of the lower parent page in view. The lower parent page is disabled when the slideout is active. This is achieved by covering the parent page with a transparent shade. The page-over-page appearance will help focus the user’s attention on the active sub-task while providing context of this “interruption” to the primary task.
<br>

<img src="img/slideout-panel1.png">
<br>

(Example of panel animation)
<br>
<br>
**Anatomy of Slideout**

The active panel should include the following elements:

*	Content container (Panel)

*	A Page title

*	Close control “X” (ESC-key via keyboard)

*	Button bar for actions, including a “Cancel” (ESC-key is Cancel via keyboard)

*	Page content

*	“Shade” to disable lower level page

<br>
<img src="img/slideout-panel2.png"><br>

(Example of active panel positioned over "parent")
<br>
<br>

**Cancel and Close controls**

The close control ( X ) and the “Cancel” link/button will cancel the sub-process, close the panel and return the user to their primary path. The ESC-key via keyboard will close/cancel the upper-most open panel.

<img src="img/slideout-panel3.png"><br>

(Close and cancel controls)
<br>

**Passive Close**

The user may also click or tap in the “alley” (shaded area) to the left of the active panel to cancel/close the panel. This passive control allows the user to drill down to the desired level without the need to close each panel via the cancel or close controls.

<img src="img/slideout-panel4.png"><br>
<br>

When two panels are open (one over the other), only the topmost is active. Clicking or tapping the in the “alley” (on the edge of the lower panel) the top active panel closes, making the panel underneath active.
<br>

<img src="img/slideout-panel5.png"><br>

(Passive close "zone" - one level down)
<br>

Clicking or tapping the “alley” that represents the parent page (lowest level) will slide each panel out of view, closing them, and return the user to the parent page. It is recommended that no more than two panels be used in any given “task flow”.
<br>

<img src="img/slideout-panel6.png"><br>

(Passive close "zone" - two levels down)
<br>
<br>

<h3>Slideout Button Bar actions</h3>

Actions in the Slideout Button Bar follow the <a href="/guides/v2.0/pattern-library/controls/button-bar/button-bar.html">Button Bar pattern</a>.
There are two general ways of using Slideout — “Subflow” and “Extend Form”.

<h4>Sub Flow</h4>

<img src="img/slideout-panel10.png"/><br />

If the form in slide-in panel creates new entities, or changes existing ones (Create Product Configurations, Add Attribute) primary action in the Slideout Button Bar should be a noun explaining the panel resulting action: “Generate Configurations”, “Create Attribute”, etc.
Clicking that button will:
<ol>
	<li>Validate the form in Slideout. <br />If form has errors, it will show the error messages following the Error Messaging Pattern. If no errors found, it will:</li>
	<li>Close the Slideout and apply changes immediately (entity will be created in the database, for example).</li>
</ol>

<h4>Extend Form</h4>

<img src="img/slideout-panel11.png"/><br />

If the Slideout panel is a part of the form, extending it (like Advanced Inventory, or Advanced Pricing), primary action should be labeled as “Done”. Clicking it will:
<ol>
	<li>Validate the form in Slideout. <br />	If form has errors, it will show the error messages following the Error Messaging Pattern. If no errors found, it will:</li>
	<li>Close the Slideout and save the contents of its form. User still has to click “Save” button on the main form to apply changes.</li>
</ol>

Clicking “Cancel” or clicking “&times;” or clicking outside of the panel (passive close) in both cases should reset contents of the current level Slideout form to default state.
If user made changes to a form, he is presented with the modal window to confirm Cancellation:

<img src="img/slideout-panel12.png"/><br />

Clicking “Yes, Cancel” closes the Modal and Slideout, then resets form to default state. Clicking “Do not Cancel” closes the Modal.

<br>
<br>

**Slideouts and Page-grids**

In its final position the panel does not snap to the page-grid of the parent page, but rather should respect some distance from the left edge of the browser. This distance provides an “alley” that creates a page-over-page metaphor. This distance should be some % of the viewport, rather than a fixed pixel width, to accommodate for variations in browser widths.
<br>
<img src="img/slideout-panel7.png"><br>

(Panel position in relation to browser edge)
<br>
<br>
A 12-column page-grid is nested inside the content area of the slideout panel, with an additional 15px of padding added to the left edge.

<img src="img/slideout-panel8.png"><br>

(Nested page-grid with additional padding)

<br>
This method of nesting a 12-column page-grid inside the slideout panel is repeated with each subsequent panel. This is done so that the panels can easily accommodate established page templates used in the Magento framework. With each additional panel, the position of the active panel should indent to create the page-over-page metaphor and allow a zone(s) for the passive close interaction mentioned above.

<img src="img/slideout-panel9.png"><br>

<h3 id="modals">Modals</h3>

**Behavior and Animation**

When an action is taken that triggers a modal, the modal window should appear center-aligned in the user’s browser window. The modal should appear to fade in or grow from the center of the screen. The timing of this animation should be set to about 0.3s (see an <a href="http://tympanus.net/Development/ModalWindowEffects/"> example of the animation here </a>, refer to “FADE IN & SCALE” option). When the modal is triggered, the parent page should become disabled and shaded while the modal is active.
<br>

<img src="img/modal1.png"><br>
(Example of a Confirmation Modal)
<br>
<br>
**Anatomy of a Modal**

The active modal should include the following elements:

*	Content container (Modal Window)

*	A Title

*	Close control “X” (ESC-key via keyboard)

*	Page content

*	Call to action(s), including “Cancel” (ESC-key is Cancel via keyboard)

*	“Shade” to disable lower level page

**Cancel and Close controls**

Every modal should include a close control ( X ) in the upper right corner as well as a “Cancel” link or button.  Additionally, if the user clicks or taps the shaded area outside of the modal container the modal will cancel and close. The ESC-key via keyboard will close/cancel the active modal window.

<br>
<img src="img/modal3.png"><br>

(Modal “Cancel” and “Close” controls)
<br>
<br>
**Modal Dimensions**

The modal should be center-aligned in the user’s browser window and be 75% of the viewport width. The content within the modal window should flex accordingly to the width of the browser window and the modal width.

<img src="img/modal4.png"><br>

The distance of the modal to the top of the browser should have a fixed distance and NOT be percentage-based. This will insure that the “title” and top “close control” will be visible if the modal window is taller than the viewport. Within the content area of the modal window itself there should be 30px padding.
<br>

<img src="img/modal5.png"><br>

(Placement and Padding of Modal)<br>

<img src="img/modal6.png"><br>

(Sample of progress bar in modal)<br>

**Implementation**
Modal windows are implemented by the following Magento jQuery widgets:
- <a href="{{site.gdeurl21}}javascript-dev-guide/widgets/widget_modal.html">modal</a>
- <a href="{{site.gdeurl21}}javascript-dev-guide/widgets/widget_alert.html">alert</a> (extends modal)
- <a href="{{site.gdeurl21}}javascript-dev-guide/widgets/widget_confirm.html">confirm</a> (extends modal)
- <a href="{{site.gdeurl21}}javascript-dev-guide/widgets/widget_prompt.html">propmt</a> (extends modal)


<h3 id="overlays">Overlays</h3>

**Drop downs**

Drop down overlays behave just as drop down form elements do. A button or control toggles the drop down opened and closed. Selecting an option from the expanded list selects that option and closes the overlay.

<img src="img/overlay1.jpg">
(Examples of drop down overlays)<br>

**Flyouts**

Flyouts are overlays that typically emerge from a link, menu heading, or other control. They are somewhat different than drop downs in that they create a sort of “tab” around the control that triggered them.

<img src="img/overlay2.jpg">
(Data-table Filtering Flyout)<br>

<img src="img/overlay3.jpg">
(Data-table In-line Editing Flyout)<br>

<img src="img/overlay4.jpg">
(Sub-menu Navigation Flyout)<br>

**Contextual Help**

Contextual Help is similar to a “tooltip” element, except that it is revealed by clicking or tapping a control and dismissed by tapping again, or by opening another Contextual Help element on the page.

<img src="img/overlay5.jpg">
(Example of Contextual Help)<br>

**Alerts and Messages**

Within the Magento application it is often necessary and helpful to provide feedback to the user as to the success or failure of an action or process. This feedback may come in the form of client-side validation or server-side validation.
<img src="img/overlay6.jpg">
(Field Level Validation message)<br>
When field level validation is triggered resulting message should appear and persist until the user has taken an action to correct the error (for example, clicks into the form field to re-type an incorrect password).
<img src="img/overlay7.jpg">
(Data-table with Confirmation Message)<br>


<h3 id="assets">Assets</h3>

<a href="src/Slide-out-Panels.psd">Download Slide-out Panels PSD source</a>

<a href="src/Modal.psd">Download Modal PSD source</a>
