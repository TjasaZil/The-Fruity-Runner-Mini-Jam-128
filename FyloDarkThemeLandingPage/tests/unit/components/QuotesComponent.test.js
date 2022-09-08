//test that the component has a quotation DONE
//test that the component has 3 profile pictures DONE
// test that the component has 3 paragraphs with desired text DONE
//test that the component has three names DONE
//test that the component has job positions DONE

import { mount } from "@vue/test-utils";
import QuotesComponent from "@/components/QuotesComponent";

describe("QuotesComponent", () => {
  it("displays the quotation image", () => {
    const wrapper = mount(QuotesComponent);
    const quotation = wrapper.findAll("[data-test='quotation-image-test']");
    expect(quotation.length).toBe(1);
  });
  it("displays three paragraphs", () => {
    const wrapper = mount(QuotesComponent);
    const paragraphsFound = wrapper.findAll("[data-test='paragraph-test']");

    expect(paragraphsFound.length).toBe(3);
  });
  it("displays appropriate text in paragraphs", () => {
    const wrapper = mount(QuotesComponent);
    const paraFound = wrapper.findAll("[data-test='paragraph-test']");
    const paraFoundText = paraFound.map((item) => item.text());
    expect(paraFoundText).toEqual([
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    ]);
  });
  it("displays three profile pictures", () => {
    const wrapper = mount(QuotesComponent);
    const profileImages = wrapper.findAll("[data-test='profile-image-test']");
    expect(profileImages.length).toBe(3);
  });
  it("displays three names", () => {
    const wrapper = mount(QuotesComponent);
    const namesFound = wrapper.findAll("[data-test='name-test']");
    const namesFoundText = namesFound.map((item) => item.text());
    expect(namesFoundText).toEqual([
      "Satish Patel",
      "Bruce McKenzie",
      "Iva Boyd",
    ]);
  });
  it("displays three job positions", () => {
    const wrapper = mount(QuotesComponent);
    const jobsFound = wrapper.findAll("[data-test='jobs-test']");
    const jobsFoundText = jobsFound.map((item) => item.text());
    expect(jobsFoundText).toEqual([
      "Founder & CEO, Huddle",
      "Founder & CEO, Huddle",
      "Founder & CEO, Huddle",
    ]);
  });
});
