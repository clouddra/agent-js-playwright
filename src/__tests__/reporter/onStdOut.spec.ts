/*
 *  Copyright 2021 EPAM Systems
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import RPReporter from '../../reporter';
import { mockConfig } from '../mocks/configMock';
import { RPClientMock } from '../mocks/RPClientMock';

describe('onStdOut testing', () => {
  const reporter = new RPReporter(mockConfig);
  reporter.client = new RPClientMock(mockConfig);

  test('case rp:addAttributes should call addAttributes', () => {
    const type = 'rp:addAttributes';
    const data = [
      {
        key: 'key',
        value: 'value',
      },
    ];
    jest.spyOn(reporter, 'addAttributes');
    const chunk = JSON.stringify({ type, data });
    reporter.onStdOut(chunk);
    expect(reporter.addAttributes).toHaveBeenCalled();
  });

  test('case rp:setDescription should call setDescription', () => {
    const type = 'rp:setDescription';
    const data = 'Description';
    jest.spyOn(reporter, 'setDescription');
    const chunk = JSON.stringify({ type, data });
    reporter.onStdOut(chunk);
    expect(reporter.setDescription).toHaveBeenCalled();
  });

  test('case rp:setTestCaseId should call setTestCaseId', () => {
    const type = 'rp:setTestCaseId';
    const data = 'TestCaseIdForTheSuite';
    jest.spyOn(reporter, 'setTestCaseId');
    const chunk = JSON.stringify({ type, data });
    reporter.onStdOut(chunk);
    expect(reporter.setTestCaseId).toHaveBeenCalled();
  });

  test('case rp:setStatus should call setStatus', () => {
    const type = 'rp:setStatus';
    const data = 'status';
    jest.spyOn(reporter, 'setStatus');
    const chunk = JSON.stringify({ type, data });
    reporter.onStdOut(chunk);
    expect(reporter.setStatus).toHaveBeenCalled();
  });

  test('case rp:setLaunchStatus should call setLaunchStatus', () => {
    const type = 'rp:setLaunchStatus';
    const data = 'statusForLaunch';
    jest.spyOn(reporter, 'setLaunchStatus');
    const chunk = JSON.stringify({ type, data });
    reporter.onStdOut(chunk);
    expect(reporter.setLaunchStatus).toHaveBeenCalled();
  });
});
