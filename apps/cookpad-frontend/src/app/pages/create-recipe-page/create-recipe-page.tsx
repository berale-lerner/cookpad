import styles from './create-recipe-page.module.scss';
import { Button, Form, Input, Select, Space } from 'antd';
import { recipeApi } from '../../api/recipe.api';
import { toast } from 'react-toastify';
const { Option } = Select;
import { useNavigate } from "react-router-dom";


export function CreateRecipePage() {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onSubmit = async (values: any) => {
    try {
      await recipeApi.createRecipe(values);

      toast.success('Recipe successfully created!');
      navigate("/");
    } catch (error) {
      toast.error('Failed to create recipe, please try again later');
      console.error('failed to create recipe, error:', error);
    }
  };

  return (
    <div className={styles['container']}>
      <h1>Create Recipe</h1>

      <Form
        form={form}
        initialValues={{ steps: [null] }}
        name="dynamic_form_complex"
        onFinish={onSubmit}
        style={{ maxWidth: 1000 }}
        autoComplete="off"
      >
        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Missing recipe name' }]}>
          <Input />
        </Form.Item>
        <p>Steps:</p>
        <Form.List name="steps">
          {(fields, { add, remove }) => (
            <>
              {fields.map((field, stepIndex) => (
                <>
                  <Space key={field.key} align="baseline">
                    <span>{stepIndex + 1}</span>
                    <Form.Item
                      {...field}
                      label="Instruction"
                      name={[field.name, 'instruction']}
                      rules={[{ required: true, message: 'Missing instruction' }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      label="Duration time (minutes)"
                      name={[field.name, 'duration']}
                    >
                      <Input type='number' />
                    </Form.Item>

                    <Form.Item
                      {...field}
                      label="Depend on step:"
                      name={[field.name, 'depend']}
                    >
                      <Select style={{ width: 70 }}>
                        {fields.filter((field, i) => i < stepIndex).map((item, i) => (
                          <Option key={item.key} value={i}>
                            {i + 1}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>


                    {fields.length > 1 ? <span onClick={() => remove(field.name)}>Remove</span> : ''}
                  </Space>
                  <Form.List name={[field.name, 'ingredients']}>
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(field => (
                          <p key={field.key}>
                            <Space align="baseline">
                              <Form.Item
                                {...field}
                                label="name"
                                name={[field.name, 'name']}
                                rules={[{ required: true, message: 'Missing name' }]}
                              >
                                <Input />
                              </Form.Item>

                              <Form.Item
                                {...field}
                                label="amounts"
                                name={[field.name, 'amounts']}
                                rules={[{ required: true, message: 'Missing amounts' }]}
                              >
                                <Input />
                              </Form.Item>
                              <Button type="dashed" onClick={() => remove(field.name)}>Remove</Button>
                            </Space>
                          </p>
                        ))}

                        <Form.Item>
                          <Button style={{width: 300}} type="dashed" onClick={() => add()} block>
                            Add Ingredients
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                </>
              ))}

              <Form.Item>
                <Button type="dashed" onClick={() => add()} block>
                  Add step
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateRecipePage;
