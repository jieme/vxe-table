<template>
  <div>
    <p>树表格，通过配置 tree-config 和指定列 tree-node 属性来开启树表格</p>

    <vxe-table
      :tree-config="{key: 'id', children: 'children'}"
      :data.sync="tableData">
      <vxe-table-column prop="name" label="Name" tree-node></vxe-table-column>
      <vxe-table-column prop="size" label="Size"></vxe-table-column>
      <vxe-table-column prop="type" label="Type"></vxe-table-column>
      <vxe-table-column prop="date" label="Date"></vxe-table-column>
    </vxe-table>

    <p class="demo-code">显示代码</p>

    <pre>
      <code class="xml">{{ demoCodes[0] }}</code>
      <code class="javascript">{{ demoCodes[1] }}</code>
    </pre>

    <p>默认展开所有树节点，通过 expand-config 参数设置默认展开树节点</p>

    <vxe-table
      :data.sync="tableData"
      :tree-config="{key: 'id', children: 'children', expandAll: true}">
      <vxe-table-column type="index" width="120" label="序号" tree-node></vxe-table-column>
      <vxe-table-column prop="name" label="Name"></vxe-table-column>
      <vxe-table-column prop="size" label="Size"></vxe-table-column>
      <vxe-table-column prop="type" label="Type"></vxe-table-column>
      <vxe-table-column prop="date" label="Date"></vxe-table-column>
    </vxe-table>

    <p class="demo-code">显示代码</p>

    <pre>
      <code class="xml">{{ demoCodes[2] }}</code>
      <code class="javascript">{{ demoCodes[3] }}</code>
    </pre>
  </div>
</template>

<script>
import hljs from 'highlight.js'

export default {
  data () {
    return {
      tableData: [
        {
          id: '10000',
          name: '文件夹 10000',
          size: '53k',
          type: '',
          date: '2019-05-16',
          children: [
            {
              id: '11000',
              name: '文件 11000',
              size: '11k',
              type: 'js',
              date: '2019-05-16'
            },
            {
              id: '12000',
              name: '文件夹 12000',
              size: '22k',
              type: '',
              date: '2019-05-16',
              children: [
                {
                  id: '12100',
                  name: '文件夹 12100',
                  size: '60k',
                  type: 'js',
                  date: '2019-05-16',
                  children: [
                    {
                      id: '12110',
                      name: '文件 12110',
                      size: '100k',
                      type: 'js',
                      date: '2019-05-16'
                    }
                  ]
                },
                {
                  id: '122000',
                  name: '文件 122000',
                  size: '80k',
                  type: 'js',
                  date: '2019-05-16'
                }
              ]
            }
          ]
        },
        {
          id: '20000',
          name: '文件 20000',
          size: '66k',
          type: 'js',
          date: '2019-05-16'
        },
        {
          id: '30000',
          name: '文件夹 30000',
          size: '3k',
          type: '',
          date: '2019-05-16',
          children: [
            {
              id: '31000',
              name: '文件夹 31000',
              size: '9k',
              type: '',
              date: '2019-05-16',
              children: [
                {
                  id: '31100',
                  name: '文件 31100',
                  size: '1k',
                  type: 'js',
                  date: '2019-05-16'
                },
                {
                  id: '31200',
                  name: '文件 31200',
                  size: '224k',
                  type: 'js',
                  date: '2019-05-16'
                }
              ]
            },
            {
              id: '32000',
              name: '文件夹 32000',
              size: '33k',
              type: '',
              date: '2019-05-16',
              children: [
                {
                  id: '32100',
                  name: '文件 32100',
                  size: '35k',
                  type: 'js',
                  date: '2019-05-16'
                }
              ]
            }
          ]
        }
      ],
      demoCodes: [
        `
        <vxe-table
          :tree-config="{key: 'id', children: 'children'}"
          :data.sync="tableData">
          <vxe-table-column prop="name" label="Name" tree-node></vxe-table-column>
          <vxe-table-column prop="size" label="Size"></vxe-table-column>
          <vxe-table-column prop="type" label="Type"></vxe-table-column>
          <vxe-table-column prop="date" label="Date"></vxe-table-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              tableData:  [
                {
                  id: '10000',
                  name: '文件夹 10000',
                  size: '53k',
                  type: '',
                  date: '2019-05-16',
                  children: [
                    {
                      id: '11000',
                      name: '文件 11000',
                      size: '11k',
                      type: 'js',
                      date: '2019-05-16'
                    },
                    {
                      id: '12000',
                      name: '文件夹 12000',
                      size: '22k',
                      type: '',
                      date: '2019-05-16',
                      children: [
                        {
                          id: '12100',
                          name: '文件夹 12100',
                          size: '60k',
                          type: 'js',
                          date: '2019-05-16',
                          children: [
                            {
                              id: '12110',
                              name: '文件 12110',
                              size: '100k',
                              type: 'js',
                              date: '2019-05-16'
                            }
                          ]
                        },
                        {
                          id: '122000',
                          name: '文件 122000',
                          size: '80k',
                          type: 'js',
                          date: '2019-05-16'
                        }
                      ]
                    }
                  ]
                },
                {
                  id: '20000',
                  name: '文件 20000',
                  size: '66k',
                  type: 'js',
                  date: '2019-05-16'
                },
                {
                  id: '30000',
                  name: '文件夹 30000',
                  size: '3k',
                  type: '',
                  date: '2019-05-16',
                  children: [
                    {
                      id: '31000',
                      name: '文件夹 31000',
                      size: '9k',
                      type: '',
                      date: '2019-05-16',
                      children: [
                        {
                          id: '31100',
                          name: '文件 31100',
                          size: '1k',
                          type: 'js',
                          date: '2019-05-16'
                        },
                        {
                          id: '31200',
                          name: '文件 31200',
                          size: '224k',
                          type: 'js',
                          date: '2019-05-16'
                        }
                      ]
                    },
                    {
                      id: '32000',
                      name: '文件夹 32000',
                      size: '33k',
                      type: '',
                      date: '2019-05-16',
                      children: [
                        {
                          id: '32100',
                          name: '文件 32100',
                          size: '35k',
                          type: 'js',
                          date: '2019-05-16'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        }
        `,
        `
        <vxe-table
          :data.sync="tableData"
          :tree-config="{key: 'id', children: 'children', expandAll: true}">
          <vxe-table-column type="index" width="120" label="序号" tree-node></vxe-table-column>
          <vxe-table-column prop="name" label="Name"></vxe-table-column>
          <vxe-table-column prop="size" label="Size"></vxe-table-column>
          <vxe-table-column prop="type" label="Type"></vxe-table-column>
          <vxe-table-column prop="date" label="Date"></vxe-table-column>
        </vxe-table>
        `,
        `
        export default {
          data () {
            return {
              tableData:  [
                {
                  id: '10000',
                  name: '文件夹 10000',
                  size: '53k',
                  type: '',
                  date: '2019-05-16',
                  children: [
                    {
                      id: '11000',
                      name: '文件 11000',
                      size: '11k',
                      type: 'js',
                      date: '2019-05-16'
                    },
                    {
                      id: '12000',
                      name: '文件夹 12000',
                      size: '22k',
                      type: '',
                      date: '2019-05-16',
                      children: [
                        {
                          id: '12100',
                          name: '文件夹 12100',
                          size: '60k',
                          type: 'js',
                          date: '2019-05-16',
                          children: [
                            {
                              id: '12110',
                              name: '文件 12110',
                              size: '100k',
                              type: 'js',
                              date: '2019-05-16'
                            }
                          ]
                        },
                        {
                          id: '122000',
                          name: '文件 122000',
                          size: '80k',
                          type: 'js',
                          date: '2019-05-16'
                        }
                      ]
                    }
                  ]
                },
                {
                  id: '20000',
                  name: '文件 20000',
                  size: '66k',
                  type: 'js',
                  date: '2019-05-16'
                },
                {
                  id: '30000',
                  name: '文件夹 30000',
                  size: '3k',
                  type: '',
                  date: '2019-05-16',
                  children: [
                    {
                      id: '31000',
                      name: '文件夹 31000',
                      size: '9k',
                      type: '',
                      date: '2019-05-16',
                      children: [
                        {
                          id: '31100',
                          name: '文件 31100',
                          size: '1k',
                          type: 'js',
                          date: '2019-05-16'
                        },
                        {
                          id: '31200',
                          name: '文件 31200',
                          size: '224k',
                          type: 'js',
                          date: '2019-05-16'
                        }
                      ]
                    },
                    {
                      id: '32000',
                      name: '文件夹 32000',
                      size: '33k',
                      type: '',
                      date: '2019-05-16',
                      children: [
                        {
                          id: '32100',
                          name: '文件 32100',
                          size: '35k',
                          type: 'js',
                          date: '2019-05-16'
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        }
        `
      ]
    }
  },
  mounted () {
    Array.from(this.$el.querySelectorAll('pre code')).forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
