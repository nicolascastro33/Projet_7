import { fireEvent, screen, render } from '@testing-library/react'
import DarkMode from '.'
import { ThemeProvider } from '../../utils/context'

describe('DarkMode Funtion', () => {
  it('should change Theme', async () => {
    render(
      <ThemeProvider>
        <DarkMode />
      </ThemeProvider>
    )
    const nightModeButton = screen.getByRole('button')
    expect(nightModeButton.textContent).toBe('🌙')

    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('☀️')
  })
})
