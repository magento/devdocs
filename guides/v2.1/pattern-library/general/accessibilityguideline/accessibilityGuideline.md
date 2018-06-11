---
group: pattern
subgroup: General
title: Admin Design Pattern Library
menu_title: Accessibility Guidelines
menu_order:
menu_node:
version: 2.1
github_link: pattern-library/general/accessibilityguideline/accessibilityGuideline.md
redirect_from: /guides/v1.0/pattern-library/general/accessibilityguideline/accessibilityGuideline.html
---

## Accessibility guidelines
The Magento application should be accessible for all people, whatever their hardware, software, language, culture, location, or physical or mental ability. These are general guidelines that when adhere to, people with diverse range of hearing, movement, sight, and cognitive ability should be able to use.

### Visual {#visual}
**1. Be mindful of text length**

Don't make textual content too long or too short.

**2. Provide adequate contrast**

Be extra careful with light shades of gray, orange, and yellow. Check your contrast levels here:
[http://webaim.org/resources/contrastchecker/](http://webaim.org/resources/contrastchecker/){:target=_"blank"}
or here:
[http://www.paciellogroup.com/resources/contrastAnalyser](http://www.paciellogroup.com/resources/contrastAnalyser){:target=_"blank"}

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

**7. Design a "skip to main content" link**

A link for keyboard users to skip navigation should be at the top of the page. It can be hidden, but should be visible when in keyboard focus.

Examples

[http://www.nomensa.com/](http://www.nomensa.com/){:target=_"blank"}

[https://www.paypal.com/](https://www.paypal.com/){:target=_"blank"}

[http://www.standardchartered.com/en/](http://www.standardchartered.com/en/){:target=_"blank"}

[http://nemesisdesign.net/blog/accessibility/nice-css-skip-links-appearing-focus/](http://nemesisdesign.net/blog/accessibility/nice-css-skip-links-appearing-focus/){:target=_"blank"}

[Skip-To Widget](https://github.com/paypal/skipto){:target=_"blank"}

**8. Use animation, video and audio with caution**

If used, provide a play/pause button. Avoid flashing or strobing content, which can cause seizures. Provide captions and other alternatives for multimedia.

**9. Don’t convey content with color alone**

Evaluate the design in grayscale. Make sure to use both shapes and color to differentiate icons.

**10. Use images to enhance the experience for users with full vision**

**11. Make sure links are obvious**

Differentiate link text from other text.

**12. Do not use content that causes seizures.**

### Content {#content}
**1. Ensure that link text makes sense by itself**

Avoid "Click Here" in link text. Ambiguous links such as "More" or "Continue" can also be confusing.

**2. Provide text alternatives for non-text content.**

**3. Content should be present-able in different ways without losing meaning.**

**4. Content should appear and operate in predictable ways.**

### User Interaction {#user-interaction}

**1. Use animation, video and audio with caution.**

If used, provide a play/pause button. Avoid flashing or strobing content, which can cause seizures.

**2. Create design that adapts to phone and tablet form factors**

Don't override native accessibility features.

**3. Design accessible form controls**

Ensure form controls have descriptive labels and instructions. Pay close attention to form validation errors and recovery mechanisms.

**4. Give users enough time to read and use content.**

**5. Help users navigate and find content.**


### Development {#development}

(This section is high level only and is no way a complete list for engineering.)

**1. Ensure that all content can be accessed with just the keyboard in a logical way using tab order**

Make sure dynamic interactions (hide/show, open/close, update) can be used with the keyboard itself, without any peripheral devices. The reading order should match the visual order.

**2. Plan heading structure early**

Ensure all content and design fits under a logical heading structure.

**3. Use true text whenever possible**

True text enlarges better, loads faster, and is easier to translate. Use {% glossarytooltip 6c5cb4e9-9197-46f2-ba79-6147d9bfe66d %}CSS{% endglossarytooltip %} to add visual style.

**4. Support the link focus indicator**

Make sure keyboard users can always visually identify a focused link.

**5. Support a "skip to main content" link**

A link for keyboard users to skip navigation should be at the top of the page. It can be hidden, but should be visible when in keyboard focus.

**6. Code accessible form controls**

Ensure form controls have descriptive labels and instructions. Pay close attention to form validation errors and recovery mechanisms.

**7. Provide {% glossarytooltip 9122e7d4-7db9-48b2-ad27-1af26bad1215 %}alt text{% endglossarytooltip %} if icons or glyphs are used without text**

Cascading style sheets (CSS) for purely decorative images. Hyperlinked images without supporting text must be inline, with alternative text.

### Resources {#resources}
Overview: [http://www.w3.org/WAI/WCAG20/glance/](http://www.w3.org/WAI/WCAG20/glance/){:target=_"blank"}

Authoring Tool Accessibility Guidelines (ATAG) 1.0: [http://www.w3.org/TR/WCAG10-HTML-TECHS/](http://www.w3.org/TR/WCAG10-HTML-TECHS/){:target=_"blank"}

Authoring Tool Accessibility Guidelines (ATAG) 2.0: [http://www.w3.org/TR/WCAG20-HTML-TECHS/](http://www.w3.org/TR/WCAG20-HTML-TECHS/){:target=_"blank"}
