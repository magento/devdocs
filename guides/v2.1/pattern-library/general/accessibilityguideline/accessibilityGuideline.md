---
layout: default
group: pattern
subgroup: General
title: Magento Admin Pattern Library
menu_title: Accessibility Guideline
menu_order: 
menu_node: 
version: 2.1
github_link: pattern-library/general/accessibilityguideline/accessibilityGuideline.md
---
<h2> Accessibility Guidelines </h2>

<h3> Contents </h3>

* <a href="#overview">Overview</a>
* <a href="#visual">Visual</a>
* <a href="#content">Content</a>
* <a href="#user-interaction">User Interaction</a>
* <a href="#development">Development</a>
* <a href="#resources">Resources</a>



<h3 id="overview">Overview</h3>

Magento application should be accessible for all people, whatever their hardware, software, language, culture, location, or physical or mental ability. These are general guidelines that when adhere to, people with diverse range of hearing, movement, sight, and cognitive ability should be able to use.

<h3 id="visual">Visual</h3>
**1. Be mindful of text length**

Don't make textual content too long or too short.

**2. Provide adequate contrast**

Be extra careful with light shades of gray, orange, and yellow. Check your contrast levels here: 
<a href="http://webaim.org/resources/contrastchecker/" target="blank">http://webaim.org/resources/contrastchecker/ </a>
or here:
<a href="http://www.paciellogroup.com/resources/contrastAnalyser" target="blank">http://www.paciellogroup.com/resources/contrastAnalyser</a>

Acceptable	<br>
<img src="img/largetext-sample1.png">

Not Acceptable	<br>	 
<img src="img/largetext-sample2.png">

**3. Limit the use of CAPS**

All caps can be difficult to read and can be read incorrectly by screen readers.

**4. Use appropriate font size**

Large text: 18 px Bold (22 px Regular) or larger

Normal text: 13-14 px

**5. Consider reading order**

The reading order should match the visual order.

**6. Keep the focus indicator visible**

Ensure keyboard users can visually identify a focused link.

**7. Design a “skip to main content” link**

A link for keyboard users to skip navigation should be at the top of the page. It can be hidden, but should be visible when in keyboard focus.

Examples

<a href="http://www.nomensa.com/" target="blank"> http://www.nomensa.com/ </a>

<a href="https://www.paypal.com/" target="blank"> https://www.paypal.com/ </a>

<a href="http://www.standardchartered.com/en/" target="blank"> http://www.standardchartered.com/en/ </a>

<a href="http://nemesisdesign.net/blog/accessibility/nice-css-skip-links-appearing-focus/" target="blank"> http://nemesisdesign.net/blog/accessibility/nice-css-skip-links-appearing-focus/ </a>

<a href="https://uie.paypal.com/" target="blank"> https://uie.paypal.com/ </a> (Skip-To Widget)

**8. Use animation, video and audio with caution**

If used, provide a play/pause button. Avoid flashing or strobing content, which can cause seizures.Provide captions and other alternatives for multimedia.

**9. Don’t convey content with color alone**

Evaluate the design in grayscale. Make sure to use both shapes and color to differentiate icons.

**10. Use images to enhance the experience for users with full vision**

**11. Make sure links are obvious**

Differentiate link text from other text.

**12. Doo not use content that causes <a href="http://www.w3.org/WAI/WCAG20/quickref/Overview.php#seizure" target="blank"> seizures. </a>**

<h3 id="content">Content</h3>
**1. Ensure that link text makes sense by itself**

Avoid "Click Here" in link text. Ambiguous links such as "More" or "Continue" can also be confusing.

**2. Provide text alternatives for non-text content.**

**3. Content should be present-able in different ways without losing meaning.**

**4. Content should appear and operate in predictable ways.**

<h3 id="user-interaction">User Interaction</h3>

**1. Use animation, video and audio with caution.**

If used, provide a play/pause button. Avoid flashing or strobing content, which can cause seizures.

**2. Create design that adapts to phone and tablet form factors**

Don't override native accessibility features.

**3. Design accessible form controls**

Ensure form controls have descriptive labels and instructions. Pay close attention to form validation errors and recovery mechanisms.

**4. Give users enough time to read and use content.**

**5. Help users navigate and find content.**


<h3 id="development">Development</h3>

(This section is high level only and is no way a complete list for engineering.)

**1. Ensure that all content can be accessed with just the keyboard in a logical way using tab order**

Make sure dynamic interactions (hide/show, open/close, update) can be used with the keyboard itself, without any peripheral devices. The reading order should match the visual order.

**2. Plan heading structure early**

Ensure all content and design fits under a logical heading structure.

**3. Use true text whenever possible**

True text enlarges better, loads faster, and is easier to translate. Use CSS to add visual style.

**4. Support the link focus indicator**

Make sure keyboard users can always visually identify a focused link.

**5. Support a “skip to main content” link**

A link for keyboard users to skip navigation should be at the top of the page. It can be hidden, but should be visible when in keyboard focus.

**6. Code accessible form controls**

Ensure form controls have descriptive labels and instructions. Pay close attention to form validation errors and recovery mechanisms.

**7. Provide alt text if icons or glyphs are used without text**

Cascading style sheets (CSS) for purely decorative images. Hyperlinked images without supporting text must be inline, with alternative text.

<h3 id="resources">Resources</h3>
Overview: <a href="http://www.w3.org/WAI/WCAG20/glance/" target="blank"> http://www.w3.org/WAI/WCAG20/glance/ </a>

Authoring Tool Accessibility Guidelines (ATAG) 1.0: <a href="http://www.w3.org/TR/WCAG10-HTML-TECHS/" target="blank"> http://www.w3.org/TR/WCAG10-HTML-TECHS/</a>

Authoring Tool Accessibility Guidelines (ATAG) 2.0: <a href="http://www.w3.org/TR/WCAG20-HTML-TECHS/" target="blank"> http://www.w3.org/TR/WCAG20-HTML-TECHS/</a>
