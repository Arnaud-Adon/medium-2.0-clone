import { render, screen } from '@testing-library/react'
import Header from '../Header'
import matchMediaPolyfill from 'mq-polyfill'

describe('Header test suite', () => {
  beforeAll(() => {
    matchMediaPolyfill(window)
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event('resize'))
    }
  })

  //   beforeEach(() => jest.clearAllMocks())
  it('should display logo', () => {
    render(<Header />)

    expect(screen.getByRole('img', { name: 'Medium logo' }))
  })
  //   it('should not display h3 title when width more little than medium window size', () => {
  //     window.resizeTo(500, 300)
  //     render(<Header />)
  //     expect(screen.getByText(/About/)).not.toBeInTheDocument()
  //     expect(screen.getByText(/Contact/)).not.toBeInTheDocument()
  //     expect(screen.getByText(/Follow/)).not.toBeInTheDocument()
  //   })
})
