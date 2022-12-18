---
group: admin-pattern-library
title: Accessibility Guidelines
redirect_to: https://developer.adobe.com/commerce/admin-developer/pattern-library/general/accessibility-guidelines/
status: migrated
---
The Magento application should be accessible for all people, whatever their hardware, software, language, culture, location, or physical or mental ability. These are general guidelines that when adhere to, people with diverse range of hearing, movement, sight, and cognitive ability should be able to use.

## Visual

-  **Be mindful of text length**—Don't make textual content too long or too short.

-  **Provide adequate contrast**—Be extra careful with light shades of gray, orange, and yellow. Check your contrast levels here: [https://webaim.org/resources/contrastchecker/](https://webaim.org/resources/contrastchecker/) or here: [https://www.tpgi.com/color-contrast-checker/](https://www.tpgi.com/color-contrast-checker/)

   **Acceptable**

   ![Acceptable](img/largetext-sample1.png)

   **Not Acceptable**

   ![Not Acceptable](img/largetext-sample2.png)

-  **Limit the use of CAPS**—All caps can be difficult to read and can be read incorrectly by screen readers.

-  **Use appropriate font size**
   -  Large text: 18 px Bold (22 px Regular) or larger
   -  Normal text: 13-14 px

-  **Consider reading order**—The reading order should match the visual order.

-  **Keep the focus indicator visible**—Ensure keyboard users can visually identify a focused link.

-  **Design a "skip to main content" link**—A link for keyboard users to skip navigation should be at the top of the page. It can be hidden, but should be visible when in keyboard focus.

   **Examples:**

   -  [https://www.nomensa.com/](https://www.nomensa.com/)
   -  [https://www.paypal.com/](https://www.paypal.com/)
   -  [https://www.sc.com/en/](https://www.sc.com/en/)

   -  [Skip-To Widget](https://github.com/paypal/skipto)

-  **Use animation, video and audio with caution**—If used, provide a play/pause button. Avoid flashing or strobing content, which can cause seizures. Provide captions and other alternatives for multimedia.

-  **Don’t convey content with color alone**—Evaluate the design in grayscale. Make sure to use both shapes and color to differentiate icons.

-  **Use images to enhance the experience for users with full vision**

-  **Make sure links are obvious**—Differentiate link text from other text.

-  **Do not use content that causes seizures**

## Content

-  **Ensure that link text makes sense by itself**—Avoid "Click Here" in link text. Ambiguous links such as "More" or "Continue" can also be confusing.

-  **Provide text alternatives for non-text content**

-  **Content should be present-able in different ways without losing meaning**

-  **Content should appear and operate in predictable ways**

## User Interaction

-  **Use animation, video and audio with caution**—If used, provide a play/pause button. Avoid flashing or strobing content, which can cause seizures.

-  **Create design that adapts to phone and tablet form factors**—Don't override native accessibility features.

-  **Design accessible form controls**—Ensure form controls have descriptive labels and instructions. Pay close attention to form validation errors and recovery mechanisms.

-  **Give users enough time to read and use content**

-  **Help users navigate and find content**

## Development

(This section is high level only and is no way a complete list for engineering.)

-  **Ensure that all content can be accessed with just the keyboard in a logical way using tab order**—Make sure dynamic interactions (hide/show, open/close, update) can be used with the keyboard itself, without any peripheral devices. The reading order should match the visual order.

-  **Plan heading structure early**—Ensure all content and design fits under a logical heading structure.

-  **Use true text whenever possible**—True text enlarges better, loads faster, and is easier to translate. Use [CSS](https://glossary.magento.com/css) to add visual style.

-  **Support the link focus indicator**—Make sure keyboard users can always visually identify a focused link.

-  **Support a "skip to main content" link**—A link for keyboard users to skip navigation should be at the top of the page. It can be hidden, but should be visible when in keyboard focus.

-  **Code accessible form controls**—Ensure form controls have descriptive labels and instructions. Pay close attention to form validation errors and recovery mechanisms.

-  **Provide [alt text](https://glossary.magento.com/alt-text) if icons or glyphs are used without text**—Cascading style sheets (CSS) for purely decorative images. Hyperlinked images without supporting text must be inline, with alternative text.

## Resources

-  Overview: [https://www.w3.org/WAI/standards-guidelines/wcag/glance/](https://www.w3.org/WAI/standards-guidelines/wcag/glance/)
-  Authoring Tool Accessibility Guidelines (ATAG) 1.0: [https://www.w3.org/TR/WCAG10-HTML-TECHS/](https://www.w3.org/TR/WCAG10-HTML-TECHS/)
-  Authoring Tool Accessibility Guidelines (ATAG) 2.0: [http://www.w3.org/TR/WCAG20-HTML-TECHS/](https://www.w3.org/TR/WCAG20-HTML-TECHS/)
