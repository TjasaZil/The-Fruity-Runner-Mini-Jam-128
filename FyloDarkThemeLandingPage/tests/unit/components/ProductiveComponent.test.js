import { mount } from "@vue/test-utils";
import ProductiveComponent from "@/components/ProductiveComponent";

describe("ProductiveComponent", () => {
  it("displays image", () => {
    const wrapper = mount(ProductiveComponent);
    const ImageFound = wrapper.findAll("[data-test='test-image']");

    expect(ImageFound.length).toBe(2);
  });
  it("displays header", () => {
    const wrapper = mount(ProductiveComponent);
    expect(wrapper.text()).toMatch("Stay productive. wherever you are");
  });
  it("displays paragraph", () => {
    const wrapper = mount(ProductiveComponent);
    expect(wrapper.text()).toMatch(
      "Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs. Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required. "
    );
  });
  it("displays clickable text below paragraph", () => {
    const wrapper = mount(ProductiveComponent);
    expect(wrapper.text()).toMatch("See how Fylo Works");
  });
});
