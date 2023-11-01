/// <reference types="cypress"/>

import { GoogleObjects } from "../pageFactory/objectRepository/googleObjects"
import { GooglePage } from "../pageFactory/pageRepository/google"

// Test code
it('Google', () => {
  const google = new GooglePage()

  google.navigation()
  google.assertingSearchBox()
  google.search()
})