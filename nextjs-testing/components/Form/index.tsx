import React from 'react';

const Form: React.FC = () => (
      <form action="" className="rounded-lg overflow-hidden shadow-lg bg-white p-4">
        <div className="mb-4">
          <h3 className="text-3xl font-semibold">Create new blog</h3>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Title
            </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Text input" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Content
            <textarea className="shadow form-textarea mt-1 block w-full border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Textarea"></textarea>
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Submit
            </button>
        </div>
      </form>
);

export default Form;