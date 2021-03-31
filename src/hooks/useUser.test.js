import axios from "axios";
import { renderHook, act } from "@testing-library/react-hooks";
import { UserProvider,useUser } from "./useUser";

jest.mock("axios");

let hooksUser;

describe("useUser tests", () => {

  beforeEach(() => {
    hooksUser = renderHook(() => useUser(), {
      wrapper: UserProvider,
    });
  });

  it("Should be validating the hook is valid", () => {
    const { result: hook } = hooksUser;
    expect(hook).toHaveProperty("current");
  });

  it("Should be validating the name is undefined", () => {
    const { result:hook } = hooksUser;
    const { user } = hook.current;
    expect(user).toEqual({})
  });

  it("Should be validating the name is Leo", () => {
    const { result:hook } = hooksUser;
    const { changeUser } = hook.current;

    act(() => changeUser({ name: "Leo" }));
    
    const { user } = hook.current;
    expect(user.name).toBe("Leo");
  });

  it("Should be mockUser api", async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        data: {
            first_name:"Leo"
        }
      },
    });

    const { result:hook } = hooksUser;
    const { getUser } = hook.current;

    await act(async () => await getUser());
    
    const { user } = hook.current;
    expect(user.first_name).toBe("Leo");
  });
});