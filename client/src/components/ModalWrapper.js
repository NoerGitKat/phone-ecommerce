import styled from 'styled-components';

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	#modal {
		background-color: var(--mainWhite);
	}
`;

export default ModalWrapper;
