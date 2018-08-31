require './test/test_helper'

describe "MessageBus", type: :feature do
  it "updates a label", js: true do
    visit "test"
    expect(page).to have_content "test"
  end
end
