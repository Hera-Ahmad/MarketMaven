
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Button, Card, Flex, Icon, Input, InputGroup, InputLeftElement, Tag } from '@chakra-ui/react'
import { AiOutlineDownload } from 'react-icons/ai'
import { Tabs, TabList, TabPanels, Tab, TabPanel, HStack, } from '@chakra-ui/react'
import TransactionTable from './components/TransactionTable'
import { BsSearch } from 'react-icons/bs'

const TransactionPage = () => {

  const tabs = [{
    name: "All",
    count: 349,
  },
  {
    name: "Deposit",
    count: 114,
  },
  {
    name: "Withdraw",
    count: 238,
  },
  {
    name: "Trade",
    count: 22,
  },
  ];

  return (
    <DashboardLayout title="Transaction">
      <Flex justify="end" mt="6" mb="3">
        <Button leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
      </Flex>

      <Card borderRadius="1rem" boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)">
        <Tabs>

          <TabList pt="4"  display= "flex" justifyContent="space-between">
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name} {" "}
                  <Tag colorScheme='gray' borderRadius="full">{tab.count}</Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="200px" pr="6" >
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search by ID or destination" />
            </InputGroup>


          </TabList>

          <TabPanels>

            <TabPanel>
              <TransactionTable />
            </TabPanel>

            <TabPanel>
              <TransactionTable />
            </TabPanel>

            <TabPanel>
              <TransactionTable />
            </TabPanel>

            <TabPanel>
              <TransactionTable />
            </TabPanel>

          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  )
}

export default TransactionPage