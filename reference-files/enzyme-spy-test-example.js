import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ConversationItem from "./conversation-item-component";
import clientList from "@mocks/client/client-list.json";
import * as Actions from "@redux/clients/actions";

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
}));

describe("Module: Messages ConversationItem", () => {
  let wrapper;

  const client = clientList[0];
  const clientDisplayName = `${client.firstName} ${client.lastName}`;

  beforeEach(() => {
    wrapper = shallow(<ConversationItem client={client} />);
  });

  it("renders the conversation item", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("displays correct name", () => {
    expect(wrapper.text()).toBe(clientDisplayName);
  });

  it("selects correct client when clicking on it", () => {
    jest.spyOn(Actions, "setSelectedClient");
    wrapper.find(".conversation-item__container").simulate("click");
    expect(Actions.setSelectedClient).toHaveBeenCalledTimes(1);
    expect(Actions.setSelectedClient).toHaveBeenCalledWith(client.clientId);
  });

  it("matches the conversation list snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
