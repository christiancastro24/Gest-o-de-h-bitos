import styled from "styled-components";

export const ContainerAll = styled.div`
	border: 2px solid red;
`;

export const Container = styled.div`
	min-height: 70%;
	max-height: 95vh;
	position: relative;
	background-color: var(--lightBlue);
	border-radius: 20px;
	padding: 0.5rem;
	width: 310px;
	overflow-y: auto;
	cursor: default;
`;
export const Column = styled.div`
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	width: 100%;
`;

export const ListItem = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	justify-content: space-between;
	gap: 10px;
	padding: 0.19rem;
	text-align: left;
`;
export const SectionTitle = styled.h2`
	text-align: center;
`;

export const Title = styled.span`
	text-decoration: ${(props) => (props.done ? "line-through" : "none")};
	width: 100%;
	position: relative;

	&::before {
		content: "";
		display: inline-block;
		margin-right: 1ch;
		background: black;
		height: 10px;
		width: 10px;
		border-radius: 50%;
	}
`;

export const Bold = styled.span`
	font-weight: bold;
`;

export const TableRow = styled.div`
	background-color: lightgray;
	margin-bottom: 1.5rem;
	border-radius: 10px;
	padding: 0.5rem;
	display: ${(props) => (props.children.length > 0 ? "block" : "none")};
`;
export const ActionsColumn = styled.div`
	display: flex;
	gap: 10px;
`;

export const Counter = styled.span`
	margin: 0 1ch;
	cursor: help;
`;

export const Cite = styled.div`
	text-align: center;
`;
