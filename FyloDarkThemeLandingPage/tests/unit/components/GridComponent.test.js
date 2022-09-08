import { mount } from "@vue/test-utils";
import GridComponent from "@/components/GridComponent";
describe("GridContainer", () => {
  it("displays grid icons", () => {
    const wrapper = mount(GridComponent);
    const ImagesFound = wrapper.findAll("[data-test='grid-icons-test']");
    expect(ImagesFound.length).toBe(4);
  });
  it("displays headers in the grid", () => {
    const wrapper = mount(GridComponent);
    const headersFound = wrapper.findAll("[data-test='grid-headers-test']");
    const headersFoundText = headersFound.map((item) => item.text());
    expect(headersFoundText).toEqual([
      "Access your files, anywhere",
      "Security you can trust",
      "real-time collaboration",
      "Store any type of file",
    ]);
  });
  it("displays paragraphs in the grid", () => {
    const wrapper = mount(GridComponent);
    const paragraphsFound = wrapper.findAll(
      "[data-test='grid-paragraph-test']"
    );
    const paragraphsFoundText = paragraphsFound.map((item) => item.text());
    expect(paragraphsFoundText).toEqual([
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    ]);
  });
});
