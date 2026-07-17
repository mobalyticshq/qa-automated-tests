# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: advertisement.test.js >> Verify ad blocks within the desktop viewport range (1024-1232px) for different user roles >> Check video block & footer banner for ad free user - 2XKO in desktop at 1100x800 viewport size
- Location: e2e-tests/advertisement.test.js:9246:5

# Error details

```
Error: expect(locator).not.toBeVisible() failed

Locator:  locator('#web-2xko-display-footer-d').locator('..').or(locator('#\\32 xko-nitro-anchor').locator('..'))
Expected: not visible
Received: visible
Timeout:  15000ms

Call log:
  - Expect "soft not toBeVisible" with timeout 15000ms
  - waiting for locator('#web-2xko-display-footer-d').locator('..').or(locator('#\\32 xko-nitro-anchor').locator('..'))
    29 × locator resolved to <div class="m-114015r">…</div>
       - unexpected value "visible"

```

```yaml
- iframe
```

# Test source

```ts
  9578 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9579 |               await expect
  9580 |                 .soft(
  9581 |                   page
  9582 |                     .locator('#elden-ring-nightreign-display-all-pages')
  9583 |                     .or(page.locator('#elden-ring-nightreign-nitro-l'))
  9584 |                     .or(page.locator('#elden-ring-nightreign-nitro-3'))
  9585 |                     .first()
  9586 |                 )
  9587 |                 .not.toBeVisible();
  9588 |             });
  9589 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9590 |               await expect
  9591 |                 .soft(
  9592 |                   page
  9593 |                     .locator('#elden-ring-nightreign-display-small-all-pages')
  9594 |                     .or(page.locator('#elden-ring-nightreign-nitro-m'))
  9595 |                 )
  9596 |                 .not.toBeVisible();
  9597 |             });
  9598 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9599 |               await expect
  9600 |                 .soft(
  9601 |                   page
  9602 |                     .locator('#web-elden-ring-nightreign-display-footer-d')
  9603 |                     .locator('xpath=..')
  9604 |                     .or(page.locator('#elden-ring-nightreign-nitro-anchor').locator('xpath=..'))
  9605 |                 )
  9606 |                 .not.toBeVisible();
  9607 |             });
  9608 |             break;
  9609 |           case 'Riftbound':
  9610 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9611 |               await expect
  9612 |                 .soft(
  9613 |                   page
  9614 |                     .locator('#riftbound-video-all-pages')
  9615 |                     .or(page.locator('#riftbound-nitro-video').locator('xpath=..'))
  9616 |                 )
  9617 |                 .not.toBeVisible();
  9618 |             });
  9619 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9620 |               await expect
  9621 |                 .soft(
  9622 |                   page
  9623 |                     .locator('#riftbound-display-all-pages')
  9624 |                     .or(page.locator('#riftbound-nitro-l'))
  9625 |                     .or(page.locator('#riftbound-nitro-3'))
  9626 |                     .first()
  9627 |                 )
  9628 |                 .not.toBeVisible();
  9629 |             });
  9630 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9631 |               await expect
  9632 |                 .soft(page.locator('#riftbound-display-small-all-pages').or(page.locator('#riftbound-nitro-m')))
  9633 |                 .not.toBeVisible();
  9634 |             });
  9635 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9636 |               await expect
  9637 |                 .soft(
  9638 |                   page
  9639 |                     .locator('#web-riftbound-display-footer-d')
  9640 |                     .locator('xpath=..')
  9641 |                     .or(page.locator('#riftbound-nitro-anchor').locator('xpath=..'))
  9642 |                 )
  9643 |                 .not.toBeVisible();
  9644 |             });
  9645 |             break;
  9646 |           case '2XKO':
  9647 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9648 |               await expect
  9649 |                 .soft(
  9650 |                   page.locator('#xko-video-all-pages').or(page.locator('#\\32 xko-nitro-video').locator('xpath=..'))
  9651 |                 )
  9652 |                 .not.toBeVisible();
  9653 |             });
  9654 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9655 |               await expect
  9656 |                 .soft(
  9657 |                   page
  9658 |                     .locator('#xko-display-all-pages')
  9659 |                     .or(page.locator('#\\32 xko-nitro-l'))
  9660 |                     .or(page.locator('#\\32 xko-nitro-3'))
  9661 |                     .first()
  9662 |                 )
  9663 |                 .not.toBeVisible();
  9664 |             });
  9665 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9666 |               await expect
  9667 |                 .soft(page.locator('#xko-display-small-all-pages').or(page.locator('#\\32 xko-nitro-m')))
  9668 |                 .not.toBeVisible();
  9669 |             });
  9670 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9671 |               await expect
  9672 |                 .soft(
  9673 |                   page
  9674 |                     .locator('#web-2xko-display-footer-d')
  9675 |                     .locator('xpath=..')
  9676 |                     .or(page.locator('#\\32 xko-nitro-anchor').locator('xpath=..'))
  9677 |                 )
> 9678 |                 .not.toBeVisible();
       |                      ^ Error: expect(locator).not.toBeVisible() failed
  9679 |             });
  9680 |             break;
  9681 |           case 'Marvel Rivals':
  9682 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9683 |               await expect
  9684 |                 .soft(
  9685 |                   page
  9686 |                     .locator('#marvel-rivals-video-all-pages')
  9687 |                     .or(page.locator('#marvel-rivals-nitro-video').locator('xpath=..'))
  9688 |                 )
  9689 |                 .not.toBeVisible();
  9690 |             });
  9691 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9692 |               await expect
  9693 |                 .soft(
  9694 |                   page
  9695 |                     .locator('#marvel-rivals-display-all-pages')
  9696 |                     .or(page.locator('#marvel-rivals-nitro-l'))
  9697 |                     .or(page.locator('#marvel-rivals-nitro-3'))
  9698 |                     .first()
  9699 |                 )
  9700 |                 .not.toBeVisible();
  9701 |             });
  9702 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9703 |               await expect
  9704 |                 .soft(page.locator('#marvel-rivals-display-small-all-pages').or(page.locator('#marvel-rivals-nitro-m')))
  9705 |                 .not.toBeVisible();
  9706 |             });
  9707 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9708 |               await expect
  9709 |                 .soft(
  9710 |                   page
  9711 |                     .locator('#web-marvel-rivals-display-footer-d')
  9712 |                     .locator('xpath=..')
  9713 |                     .or(page.locator('#marvel-rivals-nitro-anchor').locator('xpath=..'))
  9714 |                 )
  9715 |                 .not.toBeVisible();
  9716 |             });
  9717 |             break;
  9718 |           case 'Deadlock':
  9719 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9720 |               await expect
  9721 |                 .soft(
  9722 |                   page
  9723 |                     .locator('#deadlock-video-all-pages')
  9724 |                     .or(page.locator('#deadlock-nitro-video').locator('xpath=..'))
  9725 |                 )
  9726 |                 .not.toBeVisible();
  9727 |             });
  9728 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9729 |               await expect
  9730 |                 .soft(
  9731 |                   page
  9732 |                     .locator('#deadlock-display-all-pages')
  9733 |                     .or(page.locator('#deadlock-nitro-l'))
  9734 |                     .or(page.locator('#deadlock-nitro-3'))
  9735 |                     .first()
  9736 |                 )
  9737 |                 .not.toBeVisible();
  9738 |             });
  9739 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9740 |               await expect
  9741 |                 .soft(page.locator('#deadlock-display-small-all-pages').or(page.locator('#deadlock-nitro-m')))
  9742 |                 .not.toBeVisible();
  9743 |             });
  9744 |             await test.step(`Expected Result: Footer banner is present on the page`, async () => {
  9745 |               await expect
  9746 |                 .soft(
  9747 |                   page
  9748 |                     .locator('#web-deadlock-display-footer-d')
  9749 |                     .locator('xpath=..')
  9750 |                     .or(page.locator('#deadlock-nitro-anchor').locator('xpath=..'))
  9751 |                 )
  9752 |                 .not.toBeVisible();
  9753 |             });
  9754 |             break;
  9755 |           case 'Diablo 4':
  9756 |             await test.step(`Expected Result: Video banner is present on the page`, async () => {
  9757 |               await expect
  9758 |                 .soft(
  9759 |                   page
  9760 |                     .locator('#diablo-4-video-all-pages')
  9761 |                     .or(page.locator('#diablo-4-nitro-video').locator('xpath=..'))
  9762 |                 )
  9763 |                 .not.toBeVisible();
  9764 |             });
  9765 |             await test.step(`Expected Result: Big vertical banner isn't present on the page`, async () => {
  9766 |               await expect
  9767 |                 .soft(
  9768 |                   page
  9769 |                     .locator('#diablo-4-display-all-pages')
  9770 |                     .or(page.locator('#diablo-4-nitro-l'))
  9771 |                     .or(page.locator('#diablo-4-nitro-3'))
  9772 |                     .first()
  9773 |                 )
  9774 |                 .not.toBeVisible();
  9775 |             });
  9776 |             await test.step(`Expected Result: Small vertical banner isn't present on the page`, async () => {
  9777 |               await expect
  9778 |                 .soft(page.locator('#diablo-4-display-small-all-pages').or(page.locator('#diablo-4-nitro-m')))
```