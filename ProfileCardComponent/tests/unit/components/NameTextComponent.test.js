import { mount } from "@vue/test-utils";
import NameTextComponent from "@/components/NameTextComponent";

describe("NameTextComponent", () => {
  it("displays name", () => {
    const wrapper = mount(NameTextComponent);
    const NameFound = wrapper.find("[data-test='name-test']");

    expect(NameFound.text()).toMatch("Victor Crest");
  });
  it("displays age", () => {
    const wrapper = mount(NameTextComponent);
    const AgeFound = wrapper.find("[data-test='age-test']");

    expect(AgeFound.text()).toMatch("26");
  });
  it("displays location", () => {
    const wrapper = mount(NameTextComponent);
    const LocationFound = wrapper.find("[data-test='location-test']");

    expect(LocationFound.text()).toMatch("London");
  });
});
