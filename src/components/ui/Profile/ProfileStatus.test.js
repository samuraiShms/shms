import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus.jsx";

describe("ProfileStatus Components", () => {
	test("status from props should be in the local state (useState)", () => {
		const component = create(<ProfileStatus status="testSamurai" />);
		const instance = component.getInstance();
		expect(instance.state.status).toBe("testSamurai");
	});

	test("in the component should being tag button innerHTML", () => {
		const component = create(<ProfileStatus status="testSamurai" />);
		const instance = component.root;
		const button = instance.findByType("button");
		expect(button.props.children).toBe("testSamurai click to change");
	})

	test("in the component should being tag innerHTML", () => {
		const component = create(<ProfileStatus status="testSamurai" />);
		const instance = component.root;
		const button = instance.findByType("button");
		expect(button).not.toBeNull();
	})

	test("in the component shouldn't being tag mark", () => {
		const component = create(<ProfileStatus status="testSamurai" />);
		const instance = component.root;
		expect(() => {
			const mark = instance.findByType("mark");
		}).toThrow()
	})

	test("input should be displayed to editMode", () => {
		const component = create(<ProfileStatus status="testSamurai" />);
		const instance = component.root;
		const button = instance.findByType('button')
		button.props.onClick()
		const input = instance.findByType('input')
		expect(input.props.value).toBe('testSamurai')
	})

	test('editMode in component should be true', () => {
		const component = create(<ProfileStatus status='testSamurai' />)
		const root = component.root;
		const button = root.findByType('button')
		button.props.onClick()
		const instanse = component.getInstance()
		expect(instanse.state.editMode).toBe(true)
	})

	test('callback is call?', () => {
		const mockCallback = jest.fn()
		const component = create(<ProfileStatus status='testSamurai' updateStatusThunkCreator={mockCallback} />)
		const instance = component.getInstance()
		instance.setDisabledEditMode()
		expect(mockCallback.mock.calls.length).toBe(1)
	})
});
