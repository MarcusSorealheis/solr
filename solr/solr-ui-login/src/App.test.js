/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { render, screen } from '@testing-library/react';
import App from './App';

/*
  This file is very simple and mostly boilerplate to show
  how to test a React component. The test is checking that
  the text "migration" is present in the rendered component.
  This is a good starting point for testing your additioinal
  components. The API is declaritive and easy to use.

  A good place to start is the React Testing Library docs:
  https://testing-library.com/docs/ecosystem-jest-dom/
*/

test('renders migration note', () => {
  render(<App />);
  const linkElement = screen.getByText(/migration/i);
  expect(linkElement).toBeInTheDocument();
});
