import { mount } from "@vue/test-utils";
import HeaderComponent from "@/components/HeaderComponent";

describe("HeaderComponent", () => {
  it("displays company icon", () => {
    const wrapper = mount(HeaderComponent);
    const ImageFound = wrapper.findAll("[data-test='company-icon-test']");
    expect(ImageFound.length).toBe(1);
  });
  it("displays menu items for navigation", () => {
    const wrapper = mount(HeaderComponent);
    const itemFound = wrapper.findAll("[data-test='menu-items-test']");
    const itemFoundText = itemFound.map((item) => item.text());
    expect(itemFoundText).toEqual(["Features", "Team", "Sign In"]);
  });
});
