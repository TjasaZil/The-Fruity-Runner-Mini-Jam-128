import { mount } from "@vue/test-utils";
import StatisticsComponent from "@/components/StatisticsComponent";

describe("StatistiscComponent", () => {
  it("displays numbers", () => {
    const wrapper = mount(StatisticsComponent);
    const AllNumbers = wrapper.findAll("[data-test='numbers-testing']");
    const AllNumbersText = AllNumbers.map((item) => item.text());
    expect(AllNumbersText).toEqual(["80K", "803K", "1.4K"]);
  });
  it("displays text under numbers", () => {
    const wrapper = mount(StatisticsComponent);
    const AllText = wrapper.findAll("[data-test='text-data-test']");
    const AllTextText = AllText.map((item) => item.text());
    expect(AllTextText).toEqual(["Followers", "Likes", "Photos"]);
  });
});
