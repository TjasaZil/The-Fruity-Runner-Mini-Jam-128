import { mount } from "@vue/test-utils";
import ProfileImage from "@/components/ProfileImage";

describe("ProfileImage", () => {
  it("displays profile image", () => {
    const wrapper = mount(ProfileImage);
    const imageFound = wrapper.findAll("[data-test='profile-image-test']");
    expect(imageFound.length).toBe(1);
  });
});
