// @ts-check
const { test, expect } = require('@playwright/test')

test.describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('individual pokemon page can be navigated to', async ({ page }) => {
    await page.goto('')
    await page.getByText('oddish').click()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})