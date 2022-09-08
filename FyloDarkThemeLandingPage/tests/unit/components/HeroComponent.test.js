import { mount } from "@vue/test-utils";
import HeroComponent from "@/components/HeroComponent";

describe("HeroContainer", () => {
  it("displays hero image", () => {
    const wrapper = mount(HeroComponent);
    const ImageFound = wrapper.findAll("[data-test='hero-picture-test']");
    expect(ImageFound.length).toBe(1);
  });
  it("displays header", () => {
    const wrapper = mount(HeroComponent);
    expect(wrapper.text()).toMatch(
      "All your files in one secure location, accessible anywhere"
    );
  });
  it("displays paragraph text", () => {
    const wrapper = mount(HeroComponent);
    expect(wrapper.text()).toMatch(
      "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers."
    );
  });
});
