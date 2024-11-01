interface CoreBlockHelperAttributes
	extends React.HTMLProps<HTMLLIElement>,
		BlockAttributes {
	content: string;
}

interface CoreBlockHelperProps extends CoreBlockHelperAttributes {}
