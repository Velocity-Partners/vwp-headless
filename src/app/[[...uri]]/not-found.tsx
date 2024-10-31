import SinglePage from '@/components/templates/SinglePage';
import get404PageTemplateContent from '@/lib/get-404-page-template-content';

async function NotFoundPage() {
	const lang = 'EN'; // TODO :: Handle this from next i18n

	const node = await get404PageTemplateContent(lang);

	return <SinglePage node={node} />;
}

export default NotFoundPage;
