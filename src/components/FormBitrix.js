import React, { useState, useCallback } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Text, Input } from '@quarkly/widgets';
import atomize from '@quarkly/atomize';
import ButtonGoal from './ButtonGoal';
const Form = atomize.form();
const overrides = {
	'Form': {
		kind: 'Form'
	},
	'Title': {
		kind: 'Text',
		props: {
			children: 'Some Title'
		}
	},
	'Input': {
		kind: 'Input'
	},
	'Button': {
		kind: 'Button'
	},
	'ButtonGoal': {
		kind: 'ButtonGoal'
	},
	'Success': {
		kind: 'Text',
		props: {
			children: 'Success Message'
		}
	},
	'Error': {
		kind: 'Text',
		props: {
			children: 'Error Message'
		}
	}
};
const inputs = [{
	name: 'title',
	type: 'hidden',
	placeholder: 'Title',
	propname: '[TITLE]',
	override: 'Title'
}, {
	name: 'first_name',
	type: 'text',
	placeholder: 'First Name',
	propname: '[NAME]',
	override: 'First Name'
}, {
	name: 'last_name',
	type: 'text',
	placeholder: 'Last Name',
	propname: '[LAST_NAME]',
	override: 'Last Name'
}, {
	name: 'email_value',
	type: 'text',
	placeholder: 'Email Value',
	propname: '[EMAIL][0][VALUE]',
	override: 'Email Value'
}, {
	name: 'email_type',
	type: 'text',
	placeholder: 'Email Type',
	propname: '[EMAIL][0][VALUE_TYPE]',
	override: 'Email Type'
}, {
	name: 'phone_value',
	type: 'text',
	placeholder: 'Phone Value',
	propname: '[PHONE][0][VALUE]',
	override: 'Phone Value'
}, {
	name: 'phone_type',
	type: 'text',
	placeholder: 'Phone Type',
	propname: '[PHONE][0][VALUE_TYPE]',
	override: 'Phone Type'
}];
const urlProps = 'TRACE=$trace&SOURCE_ID=WEB&ASSIGNED_BY_ID=101';

const FormBitrix = ({
	url,
	test,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	const [status, setStatus] = useState('none');
	const onFormSubmit = useCallback(e => {
		const form = new FormData(e.target);
		const fullUrl = inputs.reduce((prevUrl, input) => `&${prevUrl}FIELDS${input.propname}=${form.get(input.name)}`, url + urlProps);
		fetch(fullUrl).then(() => setStatus('success')).catch(() => setStatus('error'));
		e.preventDefault();
	}, [url]);
	console.log(status);
	return <Box {...rest}>
		      
		{status === 'none' && test === 'none' && <Form onSubmit={onFormSubmit}>
			          
			<Text {...override('Title')} />
			          
			{inputs.map(input => <Input name={input.name} type={input.type} placeholder={input.placeholder} {...override('Input', `Input ${input.override}`)} />)}
			          
			<ButtonGoal {...override('ButtonGoal')} />
			        
		</Form>}
		      
		{(status === 'success' || test === 'success') && <Text {...override('Success')} />}
		      
		{(status === 'error' || test === 'error') && <Text {...rest} {...override('Error')} />}
		    
	</Box>;
};

const propInfo = {
	url: {
		control: 'input',
		weight: 1
	},
	test: {
		control: 'radio-group',
		variants: ['none', 'success', 'error'],
		weight: 1
	}
};
const defaultProps = {
	url: 'https://arbatskiy.bitrix24.ru/rest/16/qhtyuotrw7k1krf2/crm.lead.add.json?',
	test: 'none'
};
Object.assign(FormBitrix, {
	propInfo,
	defaultProps,
	overrides
});
export default FormBitrix;