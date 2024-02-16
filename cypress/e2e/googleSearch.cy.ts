/// <reference types="cypress"/>

import { GooglePage } from "../pageFactory/pageRepository/google"

// Test code
describe('Google', () => {
  const google = new GooglePage()
  beforeEach(() => {
    google.navigation();
    google.assertingSearchBox();
  });

  it('Google search 1', () => {
    google.search1();
    google.assertingSearchResult1();
  });

  it('Google search 2', () => {
    google.search2();
    google.assertingSearchResult2();
  });

  it('Google search 3', () => {
    google.search3();
    google.assertingSearchResult3();
  });
});