import { FC } from 'react';

import block from './block.json';

export const CoreBlockHelper: FC<CoreBlockHelperProps> & BlockConfigs = ({
	content,
	children,
}) => {
	if (!content) return null;
	return (
		<div>
			<p>THIS BLOCK CAME FROM CORE - RENDER IT IN DIV</p>
			<span dangerouslySetInnerHTML={{ __html: content }} />
			{children}
		</div>
	);
};

CoreBlockHelper.slug = block.slug;
CoreBlockHelper.title = block.title;
